import { Coupon } from "../entity/Coupon";

export interface CouponRepository {
	findByCode(code: string): Promise<Coupon | undefined>;
}
