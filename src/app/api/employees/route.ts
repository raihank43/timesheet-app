import { NextRequest, NextResponse } from "next/server";
import models from "../../../server/models";
const { Employee } = require("../../../server/models");

export async function GET(request: NextRequest) {
    console.log(Employee, "Employee")
}
