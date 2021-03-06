import { result, notFound, error } from 'express-easy-helper';
import { emit } from '../sockets/player.socket';
import Player from '../models/player.model';

// List Example's
export function list(req, res) {

    return Player.find().exec()
        .then(notFound(res))
        .then(result(res))
        .catch(error(res));
}

// Create a Example
export function create(req, res) {

    return Player.create(req.body)
        .then(result(res, 201))
        .catch(error(res));

}

// read a Example
export function read(req, res) {

    return Player.findById(req.swagger.params.id.value).exec()
        .then(notFound(res))
        .then(result(res))
        .catch(error(res));

}

// Update a Example
export function update(req, res) {

    return Player.findByIdAndUpdate(
        req.swagger.params.id.value, {
            $set: {
                greet: req.body.greet,
                language: req.body.language,
            }
        }, {
            new: true
        }).exec()
        .then(notFound(res))
        .then(result(res))
        .catch(error(res))

}

// Destroy a Example
export function destroy(req, res) {

    return Player.deleteOne({
        _id: req.swagger.params.id.value
    }).exec()
        .then(result(res))
        .catch(error(res));

}

// Emit animation with socket!
export function animation(req, res) {
    try {
        emit('animation', req.swagger.params.action.value);
        return result(res, 'Socket emitted!');
    } catch (err) {
        return error(res, 'No client with event...');
    }
}
