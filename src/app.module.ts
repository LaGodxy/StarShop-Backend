import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule } from "@nestjs/config"
import { SharedModule } from "./modules/shared/shared.module"
import { CouponModule } from "./modules/coupons/coupon.module"
import { ProductsModule } from "./modules/products/products.module"
import { ProductTypesModule } from "./modules/productTypes/productTypes.module"
import { ProductVariantsModule } from "./modules/productVariants/productVariants.module"
import { AttributeModule } from "./modules/attributes/attributes.module"
import { WishlistModule } from "./modules/wishlist/wishlist.module"
import { AuthModule } from "./modules/auth/auth.module"
import { UsersModule } from "./modules/users/users.module"
import { NotificationsModule } from "./modules/notifications/notifications.module"
import { OrdersModule } from "./modules/orders/orders.module"
import { BuyerRequestsModule } from "./modules/buyer-requests/buyer-requests.module"
import { OffersModule } from "./modules/offers/offers.module"

// Entities
import { User } from "./modules/users/entities/user.entity"
import { Order } from "./modules/orders/entities/order.entity"
import { OrderItem } from "./modules/orders/entities/order-item.entity"
import { UserRole } from "./modules/auth/entities/user-role.entity"
import { Role } from "./modules/auth/entities/role.entity"
import { Notification } from "./modules/notifications/entities/notification.entity"
import { Wishlist } from "./modules/wishlist/entities/wishlist.entity"
import { Product } from "./modules/products/entities/product.entity"
import { ProductType } from "./modules/productTypes/entities/productTypes.entity"
import { ProductVariant } from "./modules/productVariants/entities/productVariants.entity"
import { Attribute } from "./modules/attributes/entities/attribute.entity"
import { AttributeValue } from "./modules/attributes/entities/attribute-value.entity"
import { Coupon } from "./modules/coupons/entities/coupon.entity"
import { CouponUsage } from "./modules/coupons/entities/coupon-usage.entity"
import { BuyerRequest } from "./modules/buyer-requests/entities/buyer-request.entity"
import { Offer } from "./modules/offers/entities/offer.entity"
import { OfferAttachment } from "./modules/offers/entities/offer-attachment.entity"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: Number.parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || "postgres",
      password: process.env.DB_PASSWORD || "postgres",
      database: process.env.DB_DATABASE || "starshop",
      entities: [
        User,
        Order,
        OrderItem,
        UserRole,
        Role,
        Notification,
        Wishlist,
        Product,
        ProductType,
        ProductVariant,
        Attribute,
        AttributeValue,
        Coupon,
        CouponUsage,
        BuyerRequest,
        Offer,
        OfferAttachment,
      ],
      synchronize: process.env.NODE_ENV !== "production",
      logging: process.env.NODE_ENV === "development",
    }),
    SharedModule,
    AuthModule,
    UsersModule,
    CouponModule,
    WishlistModule,
    ProductsModule,
    ProductTypesModule,
    ProductVariantsModule,
    AttributeModule,
    NotificationsModule,
    OrdersModule,
    BuyerRequestsModule,
    OffersModule,
  ],
})
export class AppModule {}