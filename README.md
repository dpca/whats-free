[![Build Status](https://travis-ci.org/dpca/whats-free.svg?branch=master)](https://travis-ci.org/dpca/whats-free)
[![Code Climate](https://codeclimate.com/github/dpca/whats-free/badges/gpa.svg)](https://codeclimate.com/github/dpca/whats-free)
[![Coverage Status](https://coveralls.io/repos/github/dpca/whats-free/badge.svg?branch=master)](https://coveralls.io/github/dpca/whats-free?branch=master)

* * *

# whats-free

Simple page to show free rooms from your Google Apps account

## Development

```
yarn start
```

## Google API configuration

Go to [console.developers.google.com](console.developers.google.com), create a
project, and enable the Google Calendar API. Create OAuth 2.0 credentials for
both a __Web application__ and __API key__. Create a `.env` file with
`REACT_APP_GOOGLE_CLIENT_ID` with the Client ID from the __Web application__
credentials and `REACT_APP_GOOGLE_API_KEY` with the API key from the
__API key__ credentials. Authorize javascript origins for whatever domain/IP
you want to run on in the __Web application__ section.

## Calendar configuration

Create a `src/calendar.json` file with information about the calendars you wish
to watch. It should contain a list of calendar objects having `id`, `name`, and
`group` fields:

```
[
  {
    "id": "XXXXXXXXXX@resource.calendar.google.com",
    "name": "Example room 1",
    "group": "8th floor"
  },
  ...
]
```

## Deploy

```
yarn build
scp build/* SERVER
```

### Server configuration

Install nginx and set it up to serve the static files in the `build/`
directory (edit the `/etc/nginx/sites-available/default` file to point `root`
to the location of the build folder)

Or, use a Dockerfile like the following:

```
FROM nginx
COPY build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
```
