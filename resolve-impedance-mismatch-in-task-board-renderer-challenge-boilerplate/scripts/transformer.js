// solution code
export const transform = (data) => {
    return data.boards.map(board => {
        return {
            "boardId":board.boardId,
            "boardTitle":board.boardTitle,
            "lists":data.lists.filter(list => list.boardId == board.boardId).map(list => {
                        return {
                            "listId":list.listId,
                            "listTitle":list.listTitle,
                            "cards":data.cards.filter(card => card.listId == list.listId).map(card => {
                                        return {
                                            "cardId":card.cardId,
                                            "cardTitle":card.cardTitle,
                                            "comments":data.comments.filter(comment => comment.cardId == card.cardId).map(comment => {
                                                            return {
                                                                "commentId":comment.commentId,
                                                                "commentText":comment.commentText
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }