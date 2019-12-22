SELECT participants.*,
	(SELECT COALESCE(SUM(scores."value"), 0) as totalScore
	FROM public."Scores" AS scores
	WHERE scores."participantId" = participants."id")
FROM public."Participants" AS participants
INNER JOIN public."EventParticipants" AS eventParticipants
    ON participants."id" = eventParticipants."participantId"
WHERE eventParticipants."eventId" = ${eventId}
