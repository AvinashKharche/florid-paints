import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
import sendgrid
from sendgrid.helpers.mail import Mail, Email, To, Content

def handler(event, context):
    if event["httpMethod"] != "POST":
        return {"statusCode": 405, "body": "Method Not Allowed"}

    try:
        data = json.loads(event["body"])
        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        address = data.get("address")
        description = data.get("description")

        # Send email via SendGrid
        sg = sendgrid.SendGridAPIClient(os.environ["SENDGRID_API_KEY"])
        from_email = Email("your_email@example.com")  # Replace with your verified sender email
        to_email = To(os.environ["TO_EMAIL"])  # Client's email
        subject = "New Quote Request"
        content = Content(
            "text/plain",
            f"New quote request:\n\nName: {name}\nEmail: {email}\nPhone: {phone}\nAddress: {address}\nDescription: {description}"
        )
        mail = Mail(from_email, to_email, subject, content)
        sg.send(mail)

        # Update Google Sheet
        SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
        SERVICE_ACCOUNT_KEY = json.loads(os.environ["GOOGLE_SERVICE_ACCOUNT_KEY"])
        creds = service_account.Credentials.from_service_account_info(SERVICE_ACCOUNT_KEY, scopes=SCOPES)
        service = build("sheets", "v4", credentials=creds)
        spreadsheet_id = os.environ["SPREADSHEET_ID"]
        range_name = "Sheet1!A:E"
        values = [[name, email, phone, address, description]]
        body = {"values": values}
        service.spreadsheets().values().append(
            spreadsheetId=spreadsheet_id,
            range=range_name,
            valueInputOption="RAW",
            body=body
        ).execute()

        return {
            "statusCode": 200,
            "body": json.dumps({"message": "Quote submitted successfully"})
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }