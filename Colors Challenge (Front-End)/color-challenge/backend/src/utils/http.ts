import { Response } from 'express';

interface ResponseObject {
  status: number;
  message: string;
}

export function OK(res: Response, message: any) {
  const status = 200;

  if (message == undefined) {
    const rlt: ResponseObject = {
      status: status,
      message: 'Successful'
    };

    res.status(status).json(rlt);
  } else {
    res.status(status).json({
      data: message,
    });
  }
}

export function BadRequest(res: Response, message: string = 'Bad Request') {
  const status = 400;

  const rlt: ResponseObject = {
    status: status,
    message
  };

  res.statusMessage = message;
  res.status(status).json(rlt);
}

export function InternalServerError(
  res: Response,
  error: unknown
) {
  let message = 'Internal Server Error';

  if (error instanceof Error) {
    message = error.message;
  }

  const rlt: ResponseObject = {
    status: 500,
    message
  };

  res.statusMessage = message;
  res.status(500).json(rlt);
}