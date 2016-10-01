[![Code Climate](https://codeclimate.com/github/dpca/whats-free/badges/gpa.svg)](https://codeclimate.com/github/dpca/whats-free)

* * *

# whats-free

Simple page to show free rooms from your Google Apps account

## Development

```
npm run start
```

## Google API configuration

Go to console.developers.google.com, create a project, and enable the Google
Calendar API. Create OAuth 2.0 credentials and copy the Client ID to an entry
in a `.env` file in the top-level directory. Authorize javascript origins for
whatever domain/IP you want to run on.

## Deploy

```
npm run build
scp build/* SERVER
```

### Server configuration

Install nginx and set it up to serve the static files in the `build/`
directory (edit the `/etc/nginx/sites-available/default` file to point `root`
to the location of the build folder)
