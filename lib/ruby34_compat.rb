# Compatibility shim for Ruby 3.4+
# Restores String#tainted? and String#untrusted? which were removed from stdlib
# but are still used by Liquid 4.0.3 (pinned by github-pages 223).
class String
  def tainted?
    false
  end

  def untrusted?
    false
  end

  def untrusted
    dup
  end

  def trust
    dup
  end
end

class Symbol
  def tainted?
    false
  end

  def untrusted?
    false
  end
end
