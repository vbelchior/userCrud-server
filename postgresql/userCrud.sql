-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.addresses
(
    id serial NOT NULL,
    code integer NOT NULL,
    street text NOT NULL,
    "number" integer NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    country text NOT NULL,
    quarter text,
    extra text,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.users
(
    id serial NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    secret text NOT NULL,
    phone text,
    extra json NOT NULL,
    "addressId" integer NOT NULL,
    PRIMARY KEY (id)
);



ALTER TABLE IF EXISTS public.users
    ADD CONSTRAINT "fk_userAddress" FOREIGN KEY ("addressId")
    REFERENCES public.addresses (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
