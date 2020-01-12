SELECT scores."participantId", scores."value"
FROM public."Scores" AS scores
WHERE scores."eventId" = ${eventId}
    AND scores."fromUserId" = ${judgeId}
