import json
from flask import Flask, render_template, request, jsonify
from PlagiarismChecker_sent import check_similarity
import os
from flask_cors import CORS
DEVELOPMENT_ENV = True



app = Flask(__name__)
CORS(app)


@app.route("/Folder/Distance", methods=['POST'])
def Folder():
    try:
        req_data = request.get_json()

        string1 = req_data['examined_file']
        string2 = req_data['reference_files']
        print(string1)
        print(string2)

        result = []
        for i in range(len(string1)):
            print(string1[i])
            temp = check_similarity(str(string1[i]), str(string2[0]))
            print(temp)
            result.append(temp)

        return jsonify(result)
    except Exception as e:
        return jsonify({'error': 'An error occurred while processing the request.'}), 500






if __name__ == "__main__":
    app.run(debug=DEVELOPMENT_ENV)