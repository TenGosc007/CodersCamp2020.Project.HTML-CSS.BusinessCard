const userFeed = new Instafeed({
  get: "user",
  target: "instafeed-container",
  limit: 24,
  resolution: "low_resolution",
  accessToken:
    "IGQVJXMVpKclptQU1ZANVJNV3I4S1ZAvRE0wem5vb1hWdnpzLXg1YUpETFY0SGlKdXlOS0dkcXF0WE1TUzNBeHRVTTlMQmJoTExfWmp5dG1PZAjRqeDFuS24wWEdhVGZARQ0pNOWY3b0pxeEZA4TUh1WkxVWQZDZD",
});

userFeed.run();
