import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

const YOUR_ACCESS_KEY = '0yd4JlUlsULT7DoO7ISN3OA0fslGsvNWlVq4UHZxHb4';

export function setAPIKey(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const clone = req.clone({ setParams: { client_id: YOUR_ACCESS_KEY } });
  return next(clone);
}
