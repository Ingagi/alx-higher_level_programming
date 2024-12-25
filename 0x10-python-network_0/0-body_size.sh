#!/bin/bash
# Script to display the body size of a URL response in bytes
length=$(curl -sI "$1" | grep -i "Content-Length" | awk '{print $2}')
if [ -z "$length" ]; then
    echo "No Content-Length header found"
else
    echo "$length"
fi

