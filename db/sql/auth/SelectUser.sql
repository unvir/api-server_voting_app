SELECT users."id", users."fullName"
FROM public."Users" AS users
WHERE users.login = ${login}
	AND users.password = ${password}
