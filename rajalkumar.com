
server {
       listen 80;
       server_name www.rajalkumar.com rajalkumar.com;
       
       root /home/rajal/webapps/portfolio/react-portfolio/;
       if ($http_host != "www.rajalkumar.com") {
                 rewrite ^ http://www.rajalkumar.com$request_uri permanent;
       }
       # serve static files
       location /static/ {
       alias /home/rajal/webapps/portfolio/react-portfolio/build/;
       expires 365d;
       }
	
       location / {
                proxy_pass http://127.0.0.1:9081;
                proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;

   }
}