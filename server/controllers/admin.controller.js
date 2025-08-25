import { Profile } from "../models/profile.model.js";
import { Class } from "../models/class.model.js";
import { SubClass } from "../models/subClass.model.js";
export const createClass = async (req, res) => {
  const { name, description } = req.body;
  const adminId = req.userId;

  try {
    const newClass = await Class.create({ admin: adminId, name, description });
    res
      .status(201)
      .json({ message: "Class created successfully", class: newClass });
  } catch (error) {
    res.status(500).json({ message: "Error creating class", error });
  }
};

// recheck required
export const updateClass = async (req, res) => {
  const { classId } = req.params;
  const { name, description } = req.body;
  const adminId = req.userId;

  try {
    const existingClass = await Class.findById(classId);
    if (!existingClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    if (existingClass.admin.toString() !== adminId) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    existingClass.name = name || existingClass.name;
    existingClass.description = description || existingClass.description;
    await existingClass.save();
    res
      .status(200)
      .json({ message: "Class updated successfully", class: existingClass });
  } catch (error) {
    res.status(500).json({ message: "Error updating class", error });
  }
};

export const getClass = async (req, res) => {
  const adminId = req.userId;
  try {
    const data = await Class.findOne({ admin: adminId }).select("-profiles");
    if (!data) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching classes", error });
  }
};

export const createSubClass = async (req, res) => {
  const { classId, name, description } = req.body;

  try {
    const parentClass = await Class.findById(classId);
    if (!parentClass) {
      return res.status(404).json({ message: "Parent class not found" });
    }

    const newSubClass = await SubClass.create({
      class: classId,
      name,
      description,
    });
    parentClass.SubClasses.push(newSubClass._id);
    await parentClass.save();
    res
      .status(201)
      .json({
        message: "Sub-class created successfully",
        subClass: newSubClass,
      });
  } catch (error) {
    res.status(500).json({ message: "Error creating sub-class", error });
  }
};

export const getSubClasses = async (req, res) => {
  const { subClassId } = req.params;
  const adminId = req.userId;
  if( !adminId ) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  try {
    const subClasses = await SubClass.findById(subClassId);
    if (!subClasses) {
      return res.status(404).json({ message: "Sub-class not found" });
    }
    res.status(200).json({ subClasses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching sub-classes", error });
  }
};

export const deleteSubClass = async (req, res) => {
    const { subClassId } = req.params;
    const adminId = req.userId;
    
    try {
        const subClass = await SubClass.findById(subClassId);
        if (!subClass) {
        return res.status(404).json({ message: "Sub-class not found" });
        }
    
        const parentClass = await Class.findById(subClass.class);
        if (!parentClass) {
        return res.status(404).json({ message: "Parent class not found" });
        }
        if (parentClass.admin.toString() !== adminId) {
        return res.status(403).json({ message: "Unauthorized" });
        }
    
        await SubClass.findByIdAndDelete(subClassId);
        parentClass.SubClasses = parentClass.SubClasses.filter(
        (id) => id.toString() !== subClassId
        );
        await parentClass.save();
    
        res.status(200).json({ message: "Sub-class deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting sub-class", error });
    }
}
