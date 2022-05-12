<?php require('./layout/header.php')?>

            <main>
            <!-- tarjetas -->
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">1,504</div>
                        <div class="cardName">Daily Views</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">80</div>
                        <div class="cardName">Sales</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">284</div>
                        <div class="cardName">Comments</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">$7,842</div>
                        <div class="cardName">Earning</div>
                    </div>
                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
            </div>

                <!-- lista detalles del pedido -->
                <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2>Pedidos Recientes</h2>
                        <a href="#" class="btn">View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Pago</td>
                                <td>Estado</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Refrigerador Mave</td>
                                <td>$2500</td>
                                <td>Pagado</td>
                                <td><span class="status delivered">Entregado</span></td>
                            </tr>
                            <tr>
                                <td>Window Coolers</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status pending">Pendiente</span></td>
                            </tr>
                            <tr>
                                <td>Speakers</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span class="status return">Devolver</span></td>
                            </tr>
                            <tr>
                                <td>Hp Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status inprogress">En Progreso</span></td>
                            </tr>
                            <tr> 
                                <td>Apple Watch</td>
                                <td>$1200</d>
                                <td>Paid</td>
                                <td><span class="status delivered">Entregado</span></td>
                            </tr>
                            <tr>
                                <td>Wall Fan</td>
                                <td>$110</td>
                                <td>Paid</td>
                                <td><span class="status pending">Pendiente</span></td>
                            </tr>
                            <tr>
                                <td>Adidas Shoes</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span class="status return">Devolver</span></td>
                            </tr>
                            <tr>
                                <td>Denim Shirts</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span class="status inprogress">En Progreso</span></td>
                            </tr>
                            <tr>
                                <td>Casual Shoes</td>
                                <td>$575</td>
                                <td>Paid</td>
                                <td><span class="status pending">Pendiente</span></td>
                            </tr>
                            <tr>
                                <td>Wall Fan</td>
                                <td>$110</td>
                                <td>Paid</td>
                                <td><span class="status pending">Pendiente</span></td>
                            </tr>
                            <tr>
                                <td>Denim Shirts</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><spn class="status inprogress">En Progreso</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- nuevos clientes -->
                <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2>Clientes Recientes</h2>
                        <a href="#" class="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <td width="60px"><div class="imgBx"><img src="Img/img1.jpg"></div></td>
                            <td><h4>David<br><span>Italy</span></h4></td>
                        </tr>
                         <tr>
                            <td><div class="imgBx"><img src="Img/img2.jpg"></div></td>
                            <td><h4>Muhammad<br><span>India</span></h4></td>
                         </tr>
                         <tr>
                            <td><div class="imgBx"><img src="Img/img3.jpg"></div></td>
                            <td><h4>Amelia<br><span>France</span></h4></td>
                         </tr>
                         <tr>
                            <td><div class="imgBx"><img src="Img/img4.jpg"></div></td>
                            <td><h4>Olivia<br><span>USA</span></h4></td>
                         </tr>
                         <tr>
                            <td><div class="imgBx"><img src="Img/img5.jpg"></div></td>
                            <td><h4>Amit<br><span>Japan</span></h4></td>
                         </tr>
                         <tr>
                            <td><div class="imgBx"><img src="./img/img6.jpg"></div></td>
                            <td><h4>Ashraf<br><span>India</span></h4></td>
                         </tr>
                         <tr>
                            <td><div class="imgBx"><img src="Img/img7.jpg"></div></Ld>
                            <td><h4>Diana<br><span>Malaysia</span></h4></td>
                         </tr>
                         <tr>
                            <td><div class="imgBx"><img src="Img/img8.jpg"></div></td>
                            <td><h4>Amit<br><span>India</span></h4></td>
                         </tr>
                    </table>
                </div>
            </div>
            </main>

<?php require('./layout/footer.php')?>