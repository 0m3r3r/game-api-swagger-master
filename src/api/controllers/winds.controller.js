import { result, notFound, error } from 'express-easy-helper';
import { emit } from '../sockets/example.socket';
import Winds from '../models/wind.model';

// List Wind's
export function list(req, res) {

    return Winds.find().exec()
        .then(notFound(res))
        .then(result(res))
        .catch(error(res));
}

// read a Winds
export function read(req, res) {

    return Winds.findById(req.swagger.params.id.value).exec()
        .then(notFound(res))
        .then(result(res))
        .catch(error(res));

}

// Update a Winds
export function update(req, res) {

    return Winds.findByIdAndUpdate(
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
