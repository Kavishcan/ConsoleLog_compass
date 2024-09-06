import { getVisaTypes } from "@/db/dbQuery";
import { awaitable } from "@/lib/asyncHelper";
import { NextRequest, NextResponse } from "next/server";

async function getAllVisaTypes() {
    const [allTypes, err] = await awaitable(getVisaTypes());
    if (err) throw err;

    return Object.values(allTypes);
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("type");

    const [visaTypes, err] = await awaitable(getAllVisaTypes());
    if (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

    if (!category) {
        return Response.json(visaTypes);
    }

    if (isNaN(Number(category))) {
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const visa = visaTypes.find((visa : any) => visa.id === Number(category));

    if (!visa) {
        return NextResponse.json({ error: "Requested type not found" }, { status: 404 });
    }

    return NextResponse.json(visa);
}