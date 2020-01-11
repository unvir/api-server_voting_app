SELECT array(
	SELECT "userId"
	FROM public."EventJudges"
	WHERE "eventId" = ${eventId}
) as "userIds"