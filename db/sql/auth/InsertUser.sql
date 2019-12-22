INSERT INTO public."Users"("login", "password", "fullName", "quickPassword")
VALUES (${login}, ${password}, ${fullName}, ${quickPassword}) RETURNING id
