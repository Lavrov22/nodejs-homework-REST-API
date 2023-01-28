const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp')
const {User} = require('../../models')

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')

const avatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, filename } = req.file;
     const img = await Jimp.read(tempUpload)
    img.resize(250, 250).write(tempUpload);
    const newFileName = `${_id}_${filename}`
    const resultUpload = path.join(avatarsDir, newFileName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", newFileName);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
        avatarURL
    })
}

module.exports = avatar;