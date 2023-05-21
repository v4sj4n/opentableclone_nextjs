import { Review } from "@prisma/client";

export const calculateReviewRatingAverage = (reviews: Review[]) => {
    return reviews.reduce((sum, review) => {
        return sum + review.rating
    }, 0)/reviews.length
}