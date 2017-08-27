[![Build Status](https://travis-ci.org/dpca/whats-free.svg?branch=master)](https://travis-ci.org/dpca/whats-free)
[![Code Climate](https://codeclimate.com/github/dpca/whats-free/badges/gpa.svg)](https://codeclimate.com/github/dpca/whats-free)

* * *

# whats-free

Simple page to show free rooms from your Google Apps account

## Development

```
yarn start
```

## Google API configuration

Go to [console.developers.google.com](console.developers.google.com), create a
project, and enable the Google Calendar API. Create OAuth 2.0 credentials and
copy the Client ID to an entry in a `.env` file called
`REACT_APP_GOOGLE_CLIENT_ID` in the top-level directory. Authorize javascript
origins for whatever domain/IP you want to run on.

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
