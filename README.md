# node-shortener

node-shortener is a very simple url shortener built in node.js.

It is designed so that it can be attached to a domain with ease, without interfering with the main function of that domain.

For exampe, I own `dbyte.xyz`, this site hosts some of my homelab interfaces. I don't want my url shortener to interfere with those, so I can make it accessible from `dbyte.xyz/s/<url>`.

This is easily configured within the `.env` file which allows you to set a "prefix" or change the domain/subdomain.

## How to self host

1. `git clone https://github.com/DistroByte/node-shortener`
2. `cd node-shortener`
3. `npm i`
4. `npm run start`

Before starting for the first time, please ensure you have created a file called `.env` in the root directory of the repo. In that file place the following:

```conf
MONGO_URI=mongodb://...
BASE=http://...
PREFIX=/
PORT=3000
```

Populate the `MONGO_URI` with the connection address for your mongoDB instance, and the `BASE` value with what you want your domain name. Finally, set your prefix to whatever you like, I have mine set to `/s/`, but you can set yours to just be `/`.

> NOTE: Please include a trailing slash in the `PREFIX` config value. The application will not work without it!

## Next steps

Once you have the application running locally, you can use a reverse proxy to expose it to the world. Something like NGINX or Traefik can work really well for this. I'll leave it to you to figure how that works :D

## Testing

![Image of Postman testing](https://i.dbyte.xyz/Postman_bZCPiwRYK.png)

Using Postman you can send a POST request to the url generator and get the shortened version back.
