import Vehicle from "../models/Vehicle.js";

// 1. Store Data: Register/Add a new vehicle
export const addVehicle = async (req, res) => {
    try {
        const {
            user,
            ownerName,
            vehicleNumber,
            mobileNumber,
            fastagBank,
            vehicleType,
            category,
            leaseStatus,
            tagId,
            fasTagBalance,
            lastTollDeduction,
            monthlyTollExpense,
            fleetManager,
            model,
            } = req.body;

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }

        const existingVehicle = await Vehicle.findOne({ 
            $or: [{ user, vehicleNumber: vehicleNumber.toUpperCase() }, { tagId }] 
        });
        
        if (existingVehicle) {
            return res.status(400).json({ 
                success: false, 
                message: "Vehicle number or FASTag ID already registered" 
            });
        }

        const newVehicle = new Vehicle({
            user: req.body.user || req.user?.id, 
            ownerName,
            vehicleNumber,
            mobileNumber,
            fastagBank,
            vehicleType,
            category,
            leaseStatus,
            tagId,
            fasTagBalance,
            lastTollDeduction,
            monthlyTollExpense,
            fleetManager,
            model,
        });

        await newVehicle.save();

        res.status(201).json({
            success: true,
            message: "Vehicle registered successfully",
            data: newVehicle
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error storing vehicle data",
            error: error.message
        });
    }
};

// 2. Test Fetching: Get all vehicles for a specific user
export const getUserVehicles = async (req, res) => {
    try {
        const { userId } = req.params;
        const vehicles = await Vehicle.find({ user: userId });

        res.status(200).json({
            success: true,
            count: vehicles.length,
            data: vehicles
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching vehicle data",
            error: error.message
        });
    }
};
