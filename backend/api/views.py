from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
@csrf_exempt
def hello_world(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    id = str(body['id'])
    # print(id)
    if (body['id']):
        data = {
            'myId': id
        }
        #request.POST.get("id") #'Hello World (from the backend)!'
        return JsonResponse(data)
    else:
        data = {
            'myId': '-1'
        }
        #'Hello World (from the backend)!'
        return JsonResponse(data)


# Update average and votes
@csrf_exempt
def rate_update(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    locationID = body['id']
    # print(locationID)
    newRating = body['newRating']
    Cookie = int(body['preRating'])
    isFirstRating = int(body['isFirstRating'])

    data = {
        'msg2': 'SUCCESS'
    }
    df = pd.read_csv("rate_info.csv")
    average = df['Average'].tolist()
    index = df['ID'].tolist()
    num_vote = df['Votes'].tolist()

    ### if it is first time rating (no cookies)
    # if isFirstRating >= 1:
    #     #add number of vote
    #     num_vote[locationID] = num_vote[locationID] + 1
    #     df.loc[locationID, 'Votes'] = num_vote[locationID]
    #     #set average
    #     df.loc[locationID, 'Average'] = newRating
    
    # ### if cookie is already set up
    # else :
    #     df.loc[locationID, 'Average'] = ( (average[locationID] * num_vote[locationID]) - Cookie + newRating ) / num_vote[locationID]
    
    #set average
    df.loc[locationID, 'Average'] = ((float(average[locationID]) * float(num_vote[locationID])) + float(newRating)) / (int(num_vote[locationID])+1)
    #add number of vote
    num_vote[locationID] = num_vote[locationID] + 1
    df.loc[locationID, 'Votes'] = num_vote[locationID]

    #average[locationID] = newRating
    #print('ID: ', index)
    #print('Average: ', average)
    #df.loc[5, 'Name'] = 'WHATT'
    df.to_csv("rate_info.csv", index=False)
    # print(df)
    return JsonResponse(data)


# Gets the average of specific location
@csrf_exempt
def average_rate(request): 
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    #locationID = str(body['id'])
    locationID = body['id']

    df = pd.read_csv("rate_info.csv")
    average = df['Average'].tolist()
    data = {
        'msg3': str(average[locationID])
    }
    return JsonResponse(data)

