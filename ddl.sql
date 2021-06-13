CREATE
  TABLE Customers
  (
    customer_id  INTEGER NOT NULL ,
    first_name   VARCHAR (255) NOT NULL ,
    last_name    VARCHAR (255) NOT NULL ,
    phone_number VARCHAR (20) NOT NULL
  ) ;
ALTER TABLE Customers ADD CONSTRAINT Customers_PK PRIMARY KEY ( customer_id ) ;


CREATE
  TABLE Ingredients
  (
    ingredient_id INTEGER NOT NULL ,
    name          VARCHAR (255) NOT NULL
  ) ;
ALTER TABLE Ingredients ADD CONSTRAINT Ingredients_PK PRIMARY KEY (
ingredient_id ) ;


CREATE
  TABLE Meals
  (
    meal_id INTEGER NOT NULL ,
    name    VARCHAR (255) NOT NULL ,
    price FLOAT NOT NULL ,
    vegeterian      BOOLEAN NOT NULL ,
    Orders_order_id INTEGER NOT NULL
  ) ;
ALTER TABLE Meals ADD CONSTRAINT Meals_PK PRIMARY KEY ( meal_id ) ;


CREATE
  TABLE Orders
  (
    order_id INTEGER NOT NULL ,
    price FLOAT NOT NULL ,
    card_payment          BOOLEAN NOT NULL ,
    order_table           INTEGER ,
    take_away             BOOLEAN NOT NULL ,
    Customers_customer_id INTEGER NOT NULL
  ) ;
ALTER TABLE Orders ADD CONSTRAINT Orders_PK PRIMARY KEY ( order_id ) ;


CREATE
  TABLE Quantities
  (
    quantities_id INTEGER NOT NULL ,
    quantity      INTEGER NOT NULL
  ) ;
ALTER TABLE Quantities ADD CONSTRAINT Quantities_PK PRIMARY KEY ( quantities_id
) ;


CREATE
  TABLE meals_ingredients
  (
    Ingredients_ingredient_id INTEGER NOT NULL ,
    Meals_meal_id             INTEGER NOT NULL
  ) ;
ALTER TABLE meals_ingredients ADD CONSTRAINT meals_ingredients_PK PRIMARY KEY (
Ingredients_ingredient_id, Meals_meal_id ) ;


CREATE
  TABLE quantities_ingredients
  (
    Quantities_quantities_id  INTEGER NOT NULL ,
    Ingredients_ingredient_id INTEGER NOT NULL
  ) ;
ALTER TABLE quantities_ingredients ADD CONSTRAINT quantities_ingredients_PK
PRIMARY KEY ( Quantities_quantities_id, Ingredients_ingredient_id ) ;


ALTER TABLE meals_ingredients ADD CONSTRAINT FK_ASS_2 FOREIGN KEY (
Ingredients_ingredient_id ) REFERENCES Ingredients ( ingredient_id ) ;

ALTER TABLE meals_ingredients ADD CONSTRAINT FK_ASS_3 FOREIGN KEY (
Meals_meal_id ) REFERENCES Meals ( meal_id ) ;

ALTER TABLE quantities_ingredients ADD CONSTRAINT FK_ASS_5 FOREIGN KEY (
Quantities_quantities_id ) REFERENCES Quantities ( quantities_id ) ;

ALTER TABLE quantities_ingredients ADD CONSTRAINT FK_ASS_6 FOREIGN KEY (
Ingredients_ingredient_id ) REFERENCES Ingredients ( ingredient_id ) ;

ALTER TABLE Meals ADD CONSTRAINT Meals_Orders_FK FOREIGN KEY ( Orders_order_id
) REFERENCES Orders ( order_id ) ;

ALTER TABLE Orders ADD CONSTRAINT Orders_Customers_FK FOREIGN KEY (
Customers_customer_id ) REFERENCES Customers ( customer_id ) ;
