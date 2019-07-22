-- postgres
create table "User"(
    user_id bigint primary key,
    first_name varchar(255),
    last_name varchar(255),
    username varchar(255) not null,
    photo_uri varchar(255)
);

create table "StickerPack"(
    sticker_pack_id serial primary key,
    user_id bigint not null,
    stickers_url varchar(255)[],
    constraint sticker_pack_user_id FOREIGN KEY (user_id)
            references "User" (user_id)
        on delete cascade on update cascade
);