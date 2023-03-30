# Javier Rojas Y Carlos Hernandez

books_1 = dict(name="harry potter y la piedra filosofal", code="HPJK1997", author="j.k ROWLING", year_publication=1997,
               amount=200, price=25000, cost=9000)

books_2 = dict(name="Los Juegos del Hambre", code="JHSC2008", author="Suzanne Collins", year_publication=2008,
               amount=20, price=27000, cost=12000)

books_3 = dict(name="El Hobbit", code="EHJR1937", author="J.R.R. Tolkien", year_publication=1937,
               amount=100, price=35000, cost=15000)

books_4 = dict(name="Hamlet", code="HWS1589", author="William Shakespeare", year_publication=1589,
               amount=20, price=26000, cost=13000)


def good_books(*books):
    good_books_list = []
    for book in books:
        profit_margin = book['price'] - book['cost']
        if book['amount'] >= 100:
            if profit_margin >= 14000 or (
                    book['amount'] >= 800 and (int(book['price'] * 0.1) + book['cost']) >= 14000):
                good_books_list.append(book)

    if not good_books_list:
        return "Ninguno de los libros es la mejor opción para ser vendido"
    else:
        return good_books_list


print(good_books(books_2))
