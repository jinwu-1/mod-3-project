# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CartItem.destroy_all
cart1 = Cart.create()

product1 = Product.create(name: "Jersey", price: "55.00", image_url: "https://www.customizationdepot.com/new/media/assets/categories/5500/BA5500-ATL598.png")
product2 = Product.create(name: "Hoodie", price: "40.00", image_url: "http://t0.gstatic.com/images?q=tbn%3AANd9GcS-tOzxkrGb_Xlt4s2RBcd36RvyIpANtcBJ3ucqTLX-NxULEpBrswOl62Y9cyfas5t59m4X68aX&usqp=CAc")
product3 = Product.create(name: "Long-Sleeve", price: "29.90", image_url: "http://t0.gstatic.com/images?q=tbn%3AANd9GcT7KbTlvll0qGkqJJCZlIdWjiMzkF_u9ZFsM0GO8CF8Mx4gDHOu_Fj662TJJvGqjZ3WY3jKENE&usqp=CAc")
product4 = Product.create(name: "T-Shirt", price: "24.99", image_url: "https://cache.mrporter.com/variants/images/3633577411310822/in/w2000_q80.jpg")
product5 = Product.create(name: "Shorts", price: "34.50", image_url: "https://www.dhresource.com/0x0/f2/albu/g10/M00/F3/E8/rBVaWVwLLz2AOiQ-AAFxGXg9FTc977.jpg")
product6 = Product.create(name: "Hat", price: "25.99", image_url: "https://images-na.ssl-images-amazon.com/images/I/51oSO7gjW7L._AC_UX679_.jpg")
product7 = Product.create(name: "Beanie", price: "34.50", image_url: "https://cdn.shopify.com/s/files/1/0600/6685/products/blank-beanie-light-grey-merino-wool-2_1024x1024.jpg?v=1548361379")
product8 = Product.create(name: "Jogger", price: "40.50", image_url: "https://cdn.sorsbt.com/oxxo/ContentImages/Product/19k/19KOX-BOSJOGCEP/orta-bel-jogger-pantolon_grey-melange-gri_5_enbuyuk.JPG?height=758")
