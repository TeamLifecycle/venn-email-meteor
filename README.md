# Venn Email

#### Install
```
meteor add venn-email
```

#### Usage
###### Initialize
```
VennEmail.initialize(VENN_API_KEY)
```

###### Send Email
```
VennEmail.send("from@email.com", "bob@gmail.com", "How you doin?", "This is a message")
```

### Functions
##### initialize(api_key)
|params         | type   |    description      | example                    |
|---------------| ----   |   --------------------------- | ------------     |
|api_key        | String |   Venn API Key    | 64d2fa24h3f6f7cc61asp3e8         |
##### send(from, to, subject, message)
|params         | type   |    description      | example                    |
|---------------| ----   |   --------------------------- | ------------     |
|from           | String |   from email address    | from@email.com         |
|to             | String |   to email address      | to@email.com           |
|subject        | String |   email subject         | Subject 123            |
|message        | String |   email message         | How you doin           |



#Development
... coming soon