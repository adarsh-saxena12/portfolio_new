import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Log to a file in the workspace as a backup
    // This is safe and won't be blocked by Cloudflare
    try {
      const logPath = path.join(process.cwd(), "contact-messages.log")
      const logEntry = `${new Date().toISOString()} - ${JSON.stringify(data)}\n`
      fs.appendFileSync(logPath, logEntry)
    } catch (e) {
      console.error("Backup log failed", e)
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
