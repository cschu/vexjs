#!/bin/bash


pyversion=$(python -c 'import sys; print(sys.version_info[0])')

if [[ $pyversion -eq 2 ]]
then
  python -m SimpleHTTPServer 8000
elif [[ $pyversion -eq 3 ]]
then
  python -m http.server
else
  echo "Couldn't find any python version. Please serve vex.js from your personal webserver."
  exit
fi

