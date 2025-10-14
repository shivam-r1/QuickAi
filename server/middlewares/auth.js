import { clerkClient } from "@clerk/express";

// Middleware to check userId and hasPremiumPlan

export const auth = async (req, res, next) => {
    try {
        const {userId, has} = await req.auth();
        const hasPremiumPlan = await has({plan: 'premium'});

        const user = await clerkClient.users.getUser(userId);

        if(!hasPremiumPlan && user.publicMetadata.free_usage){
            req.free_usage = user.publicMetadata.free_usage;
        }else{
            await clerkClient.users.updateUserMetadata(userId, {publicMetadata: {free_usage: 0}});
            req.free_usage = 0;
        }

        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next();
    } catch (error) {
        req.json({ success: false, message: error.message });
    }
}