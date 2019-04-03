server {
  listen 80;
  server_name www.rajalkumar.com codehawke.com;

  root /home/rajal/webapp/rajalkumar/react-portfolio/;
  if ($http_host != "www.rajalkumar.com") {
    rewrite ^ http://www.rajalkumar.com$request_uri_permanent;
  }
  # serve static files
  location /static/ {
    alias /home/rajal/webapp/rajalkumar/react-portfolio/dist/;
    express 365d;
  }

  location / {
    proxy_pass http://127.0.0.1:9081;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}