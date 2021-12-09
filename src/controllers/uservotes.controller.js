import uservotes from "../models/UserVotes";

export const postUserVotes = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({ message: "Content cannot be empty" });
    }
    try {
      const newUserVotes = new uservotes({
        workshopId: req.body.workshopId,
        userId: req.body.userId,
        vote:  req.body.vote,
        typeVote:  req.body.typeVote
      });
      const userVotesNew = await newUserVotes.save();
      res.json(userVotesNew);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong creating the new vote",
      });
    }
  };
  

  export const getUserVotesId = async (req, res) => {
    try {
      const data = await uservotes.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({
        message: error.message || "Something goes wrong retrieving the user votes",
      });
    }
  };
  
  