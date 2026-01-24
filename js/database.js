// مصفوفة أسماء عملاء عشوائية
const customerNames = ["أحمد علي", "سارة محمد", "ياسين محمود", "ليلى إبراهيم", "زينب حسن", "عمر خالد", "مريم يوسف"];

function initDatabase() {
    // 1. توليد الـ 100 منتج (لو مش موجودين)
    if (!localStorage.getItem('products')) {
        let products = [];
        for (let i = 1; i <= 100; i++) {
            products.push({
                id: 100 + i,
                name: "منتج رقم " + i,
                price: Math.floor(Math.random() * 500) + 50,
                stock: Math.floor(Math.random() * 20) + 5
            });
        }
        localStorage.setItem('products', JSON.stringify(products));
    }

    // 2. توليد 50 طلب عشوائي (لو مش موجودين)
    if (!localStorage.getItem('orders')) {
        let products = JSON.parse(localStorage.getItem('products'));
        let orders = [];

        for (let i = 1; i <= 50; i++) {
            // اختيار منتج عشوائي لكل طلب
            let randomProduct = products[Math.floor(Math.random() * products.length)];
            let quantity = Math.floor(Math.random() * 3) + 1;

            orders.push({
                id: "ORD-" + (2000 + i),
                customer: customerNames[Math.floor(Math.random() * customerNames.length)],
                items: [{ productId: randomProduct.id, quantity: quantity }],
                totalPrice: randomProduct.price * quantity,
                status: "pending", // كل الطلبات الجديدة pending عشان تجربي الـ Confirm
                date: new Date().toISOString().split('T')[0]
            });
        }
        localStorage.setItem('orders', JSON.stringify(orders));
        console.log("✅ تم إنشاء 50 طلب عشوائي بنجاح!");
    }
}

initDatabase();
