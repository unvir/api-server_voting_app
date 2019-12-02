SELECT events.*
FROM public."Events" AS events
INNER JOIN public."UsersFeaturedEvents" AS userFeatured
ON userFeatured."eventId" = events.id
WHERE userFeatured."userId" = ${userId}