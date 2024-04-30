const sendAllGames = (req, res) => {
    res.sendAllGames(req.games);
};

const sendUpdatedGames = (req, res) => {
    res.send({
        games:req.games,
        updated: req.updatedObject,
    });
};

module.exports = { sendAllGames, sendUpdatedGames };