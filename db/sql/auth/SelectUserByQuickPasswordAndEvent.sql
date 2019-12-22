SELECT users."id", users."fullName"
FROM public."Users" AS users
INNER JOIN public."EventJudges" AS eventJudges
	ON eventJudges."userId" = users."id"
WHERE users."quickPassword" = ${quickPassword}
	AND	eventJudges."eventId" = ${eventId}
