'use strict';

exports.post = (res, req, next) => {
    res.status(201).send(req.body);
}

exports.put = (res, req, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id, 
        item: req.body
    });
}

exports.delete = (res, req, next) => {
    res.status(200).send(req.body);
}