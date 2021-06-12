use restauracja;

CREATE TABLE Relation_3
  (
    meal_id        INTEGER NOT NULL,
    ingredients_id INTEGER NOT NULL,
    quantities_id  INTEGER NOT NULL
  ) ;
ALTER TABLE Relation_3 ADD CONSTRAINT Relation_3_PK PRIMARY KEY ( meal_id, ingredients_id, quantities_id ) ;


CREATE TABLE customers
  (
    id         INTEGER NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL,
    phone      VARCHAR(255) NOT NULL
  ) ;
ALTER TABLE customers ADD CONSTRAINT customer_PK PRIMARY KEY ( id ) ;


CREATE TABLE ingredients
  (
    id   INTEGER NOT NULL ,
    name VARCHAR(255) NOT NULL
  ) ;
ALTER TABLE ingredients ADD CONSTRAINT Ingredients_PK PRIMARY KEY ( id ) ;


CREATE TABLE meals
  (
    id   INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    order_id   INTEGER NOT NULL,
    vegan      BOOLEAN NOT NULL,
    vegetarian BOOLEAN NOT NULL
  ) ;
ALTER TABLE meals ADD CONSTRAINT meal_PK PRIMARY KEY ( id ) ;


CREATE TABLE orders
  (
    id INTEGER NOT NULL,
    price FLOAT NOT NULL,
    customer_id  INTEGER NOT NULL,
    order_date   TIMESTAMP NOT NULL,
    card_payment BOOLEAN NOT NULL,
    "table"      INTEGER NOT NULL,
    take_away    BOOLEAN NOT NULL
  ) ;
ALTER TABLE orders ADD CONSTRAINT order_PK PRIMARY KEY ( id ) ;


CREATE TABLE quantities
  ( id INTEGER NOT NULL, quantity INTEGER NOT NULL
  ) ;
ALTER TABLE quantities ADD CONSTRAINT quantities_PK PRIMARY KEY ( id ) ;


ALTER TABLE Relation_3 ADD CONSTRAINT FK_ASS_3 FOREIGN KEY ( meal_id ) REFERENCES meals ( id ) ;

ALTER TABLE Relation_3 ADD CONSTRAINT FK_ASS_4 FOREIGN KEY ( ingredients_id ) REFERENCES ingredients ( id ) ;

ALTER TABLE Relation_3 ADD CONSTRAINT FK_ASS_5 FOREIGN KEY ( quantities_id ) REFERENCES quantities ( id ) ;

ALTER TABLE meals ADD CONSTRAINT meal_order_FK FOREIGN KEY ( order_id ) REFERENCES orders ( id ) ;

ALTER TABLE orders ADD CONSTRAINT order_customer_FK FOREIGN KEY ( customer_id ) REFERENCES customers ( id ) ;
