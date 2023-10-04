import json

def handler(request):
    try:
        # Parse the incoming request, e.g., retrieve data from query parameters or the request body
        input_data = request.query.get('input')  # Adjust this based on your API requirements

        # Perform some processing or fetch data based on the input
        report_data = generate_report(input_data)  # Replace with your actual report generation logic

        # Respond with the report data as JSON with CORS headers
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': 'https://willgerstung.com', 
                'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',  # Specify allowed HTTP methods
            },
            'body': json.dumps(report_data)
        }
    except Exception as e:
        print('Error processing request:', e)
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }

# Sample function for generating a report (replace this with your actual report generation logic)
def generate_report(input_data):
    # Your report generation logic here
    report = {
        'someData': f'Report data based on input: {input_data}',
        # Add more data as needed
    }
    return report
