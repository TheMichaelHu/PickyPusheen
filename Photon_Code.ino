#include "application.h"
#include "HttpClient/HttpClient.h"

/**
* Declaring the variables.
*/
unsigned int nextTime = 0;    // Next time to contact the server
HttpClient http;

// Headers currently need to be set at init, useful for API keys etc.
http_header_t headers[] = {
    //  { "Content-Type", "application/json" },
    //  { "Accept" , "application/json" },
    { "Accept" , "*/*"},
    { NULL, NULL } // NOTE: Always terminate headers will NULL
};

http_request_t request;
http_response_t response;

void setup() {
    Serial.begin(9600);
    pinMode(A4, INPUT_PULLUP);
}

void loop() {
    static bool prev,curr=1;
    prev = curr;
    curr = digitalRead(A4);
    if (prev && !curr) {
        delay(5);
        request.hostname = "picky-pusheen.herokuapp.com";
        request.port = 80;
        request.path = "/buttons/ijhgkoqo";
        http.get(request, response, headers);
    }


    // The library also supports sending a body with your request:
    //request.body = "{\"key\":\"value\"}";

    // Get request
    
}

