import { NextRequest, NextResponse } from "next/server";

type WaitlistPayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  age?: number;
  locationCity?: string;
  locationCountry?: string;
  preferredLanguages?: string[];
  interestedProfileTypes?: string[];
  nationality?: string;
  culturalBackground?: string;
  timezone?: string; // Client's local timezone (IANA format)
  company?: string; // Honeypot field: should stay empty
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim();
}

export async function POST(request: NextRequest) {
  let payload: WaitlistPayload;
  try {
    payload = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const email = clean(payload.email).toLowerCase();
  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const gender = clean(payload.gender);
  const age = typeof payload.age === "number" ? payload.age : undefined;
  const locationCity = clean(payload.locationCity);
  const locationCountry = clean(payload.locationCountry);
  const preferredLanguages = Array.isArray(payload.preferredLanguages) ? payload.preferredLanguages : undefined;
  const interestedProfileTypes = Array.isArray(payload.interestedProfileTypes) ? payload.interestedProfileTypes : undefined;
  const nationality = clean(payload.nationality);
  const culturalBackground = clean(payload.culturalBackground);
  const timezone = clean(payload.timezone) || "UTC";
  const company = clean(payload.company);

  // Honeypot spam trap - silently accept but don't process
  if (company) {
    return NextResponse.json({ message: "You've been added to the waitlist!" }, { status: 200 });
  }

  // Validate required fields
  if (!email || !firstName) {
    return NextResponse.json({ error: "Email and first name are required." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (email.length > 254 || firstName.length > 50) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  // Get backend URL from environment
  const backendUrl = process.env.BACKEND_API_URL;
  if (!backendUrl) {
    console.error("BACKEND_API_URL is not configured");
    return NextResponse.json({ error: "Service is not configured." }, { status: 500 });
  }

  // Extract client IP to forward to backend
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const clientIp = forwardedFor?.split(",")[0]?.trim() || realIp || undefined;

  // Build request body for backend
  const backendPayload = {
    email,
    firstName,
    lastName: lastName || undefined,
    gender: gender || undefined,
    age: age && age >= 18 && age <= 120 ? age : undefined,
    locationCity: locationCity || undefined,
    locationCountry: locationCountry || undefined,
    preferredLanguages: preferredLanguages?.length ? preferredLanguages : undefined,
    interestedProfileTypes: interestedProfileTypes?.length ? interestedProfileTypes : undefined,
    nationality: nationality || undefined,
    culturalBackground: culturalBackground || undefined,
    timezone,
    source: "website",
    deviceInfo: {
      platform: "web",
    },
  };

  try {
    const response = await fetch(`${backendUrl}/api/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(clientIp ? { "X-Forwarded-For": clientIp } : {}),
      },
      body: JSON.stringify(backendPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle rate limit errors
      if (response.status === 429) {
        return NextResponse.json(
          { error: data.detail || "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { error: data.detail || "Unable to join waitlist. Please try again." },
        { status: response.status }
      );
    }

    return NextResponse.json({
      message: data.message || "You've been added to the waitlist!",
      isNew: data.isNew,
    });
  } catch (error) {
    console.error("Failed to proxy waitlist request:", error);
    return NextResponse.json({ error: "Unable to join waitlist. Please try again." }, { status: 500 });
  }
}
