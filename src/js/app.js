export default function healthStatus(params) {
  let status;
  const { health } = params;
  switch (true) {
    case health >= 50:
      status = 'healthy';
      break;
    case health < 50 && health >= 15:
      status = 'wounded';
      break;
    case health < 15:
      status = 'critical';
      break;
    default:
      status = 'undefined';
  }
  return status;
}
