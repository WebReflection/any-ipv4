# any-ipv4

A module that exports an Array of IPv4, non internal, addresses, wuth a handy `toString()` method that returns its first IP, or `0.0.0.0` if no IPv4 was found.

The list of IPs is Wi-Fi first, Ethernet after, which is the most common use case I have for IoT projects and so on.

```js
import IPv4 from 'any-ipv4';
import {createServer} from 'http';

createServer(handler).listen(8080, () => {
  console.log(`http://${IPv4}:8080/`);
});
```
